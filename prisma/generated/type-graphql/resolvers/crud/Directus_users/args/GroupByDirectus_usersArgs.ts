import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_usersOrderByWithAggregationInput } from "../../../inputs/Directus_usersOrderByWithAggregationInput";
import { Directus_usersScalarWhereWithAggregatesInput } from "../../../inputs/Directus_usersScalarWhereWithAggregatesInput";
import { Directus_usersWhereInput } from "../../../inputs/Directus_usersWhereInput";
import { Directus_usersScalarFieldEnum } from "../../../../enums/Directus_usersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDirectus_usersArgs {
  @TypeGraphQL.Field(_type => Directus_usersWhereInput, {
    nullable: true
  })
  where?: Directus_usersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Directus_usersOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Directus_usersOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_usersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "first_name" | "last_name" | "email" | "password" | "location" | "title" | "description" | "tags" | "avatar" | "language" | "theme" | "tfa_secret" | "status" | "role" | "token" | "last_access" | "last_page" | "provider" | "external_identifier" | "auth_data" | "email_notifications">;

  @TypeGraphQL.Field(_type => Directus_usersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Directus_usersScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

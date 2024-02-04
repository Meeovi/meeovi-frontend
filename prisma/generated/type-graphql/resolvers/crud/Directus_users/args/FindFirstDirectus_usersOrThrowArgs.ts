import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_usersOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Directus_usersOrderByWithRelationAndSearchRelevanceInput";
import { Directus_usersWhereInput } from "../../../inputs/Directus_usersWhereInput";
import { Directus_usersWhereUniqueInput } from "../../../inputs/Directus_usersWhereUniqueInput";
import { Directus_usersScalarFieldEnum } from "../../../../enums/Directus_usersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstDirectus_usersOrThrowArgs {
  @TypeGraphQL.Field(_type => Directus_usersWhereInput, {
    nullable: true
  })
  where?: Directus_usersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Directus_usersOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Directus_usersOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Directus_usersWhereUniqueInput, {
    nullable: true
  })
  cursor?: Directus_usersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Directus_usersScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "first_name" | "last_name" | "email" | "password" | "location" | "title" | "description" | "tags" | "avatar" | "language" | "theme" | "tfa_secret" | "status" | "role" | "token" | "last_access" | "last_page" | "provider" | "external_identifier" | "auth_data" | "email_notifications"> | undefined;
}

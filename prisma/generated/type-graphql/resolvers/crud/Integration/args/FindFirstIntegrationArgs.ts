import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/IntegrationOrderByWithRelationAndSearchRelevanceInput";
import { IntegrationWhereInput } from "../../../inputs/IntegrationWhereInput";
import { IntegrationWhereUniqueInput } from "../../../inputs/IntegrationWhereUniqueInput";
import { IntegrationScalarFieldEnum } from "../../../../enums/IntegrationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstIntegrationArgs {
  @TypeGraphQL.Field(_type => IntegrationWhereInput, {
    nullable: true
  })
  where?: IntegrationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IntegrationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: IntegrationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => IntegrationWhereUniqueInput, {
    nullable: true
  })
  cursor?: IntegrationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [IntegrationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "write_access" | "access_key" | "secret_access_key" | "label" | "admin" | "custom_fields" | "created_at" | "updated_at" | "last_usage_at" | "deleted_at"> | undefined;
}

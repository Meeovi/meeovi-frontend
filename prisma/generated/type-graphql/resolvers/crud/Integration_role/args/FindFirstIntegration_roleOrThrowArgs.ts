import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Integration_roleOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Integration_roleOrderByWithRelationAndSearchRelevanceInput";
import { Integration_roleWhereInput } from "../../../inputs/Integration_roleWhereInput";
import { Integration_roleWhereUniqueInput } from "../../../inputs/Integration_roleWhereUniqueInput";
import { Integration_roleScalarFieldEnum } from "../../../../enums/Integration_roleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstIntegration_roleOrThrowArgs {
  @TypeGraphQL.Field(_type => Integration_roleWhereInput, {
    nullable: true
  })
  where?: Integration_roleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Integration_roleOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Integration_roleWhereUniqueInput, {
    nullable: true
  })
  cursor?: Integration_roleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"integration_id" | "acl_role_id"> | undefined;
}

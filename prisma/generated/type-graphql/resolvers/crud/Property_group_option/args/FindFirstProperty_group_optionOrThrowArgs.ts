import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_group_optionOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Property_group_optionOrderByWithRelationAndSearchRelevanceInput";
import { Property_group_optionWhereInput } from "../../../inputs/Property_group_optionWhereInput";
import { Property_group_optionWhereUniqueInput } from "../../../inputs/Property_group_optionWhereUniqueInput";
import { Property_group_optionScalarFieldEnum } from "../../../../enums/Property_group_optionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProperty_group_optionOrThrowArgs {
  @TypeGraphQL.Field(_type => Property_group_optionWhereInput, {
    nullable: true
  })
  where?: Property_group_optionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Property_group_optionOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Property_group_optionOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Property_group_optionWhereUniqueInput, {
    nullable: true
  })
  cursor?: Property_group_optionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Property_group_optionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "property_group_id" | "color_hex_code" | "media_id" | "created_at" | "updated_at"> | undefined;
}

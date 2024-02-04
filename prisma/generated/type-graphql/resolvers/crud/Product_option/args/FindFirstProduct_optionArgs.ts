import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_optionOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_optionOrderByWithRelationAndSearchRelevanceInput";
import { Product_optionWhereInput } from "../../../inputs/Product_optionWhereInput";
import { Product_optionWhereUniqueInput } from "../../../inputs/Product_optionWhereUniqueInput";
import { Product_optionScalarFieldEnum } from "../../../../enums/Product_optionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProduct_optionArgs {
  @TypeGraphQL.Field(_type => Product_optionWhereInput, {
    nullable: true
  })
  where?: Product_optionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_optionOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_optionOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_optionWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_optionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_optionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"product_id" | "product_version_id" | "property_group_option_id"> | undefined;
}

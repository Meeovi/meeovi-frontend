import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_category_treeOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_category_treeOrderByWithRelationAndSearchRelevanceInput";
import { Product_category_treeWhereInput } from "../../../inputs/Product_category_treeWhereInput";
import { Product_category_treeWhereUniqueInput } from "../../../inputs/Product_category_treeWhereUniqueInput";
import { Product_category_treeScalarFieldEnum } from "../../../../enums/Product_category_treeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyProduct_category_treeArgs {
  @TypeGraphQL.Field(_type => Product_category_treeWhereInput, {
    nullable: true
  })
  where?: Product_category_treeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_category_treeOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_category_treeWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_category_treeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"product_id" | "product_version_id" | "category_id" | "category_version_id"> | undefined;
}

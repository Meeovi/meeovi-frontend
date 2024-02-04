import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_cross_selling_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_cross_selling_translationOrderByWithRelationAndSearchRelevanceInput";
import { Product_cross_selling_translationWhereInput } from "../../../inputs/Product_cross_selling_translationWhereInput";
import { Product_cross_selling_translationWhereUniqueInput } from "../../../inputs/Product_cross_selling_translationWhereUniqueInput";
import { Product_cross_selling_translationScalarFieldEnum } from "../../../../enums/Product_cross_selling_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Product_cross_sellingProduct_cross_selling_translationArgs {
  @TypeGraphQL.Field(_type => Product_cross_selling_translationWhereInput, {
    nullable: true
  })
  where?: Product_cross_selling_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_cross_selling_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_cross_selling_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"product_cross_selling_id" | "language_id" | "name" | "created_at" | "updated_at"> | undefined;
}

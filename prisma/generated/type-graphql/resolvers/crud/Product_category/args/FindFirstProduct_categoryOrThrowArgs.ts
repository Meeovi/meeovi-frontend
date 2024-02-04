import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_categoryOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_categoryOrderByWithRelationAndSearchRelevanceInput";
import { Product_categoryWhereInput } from "../../../inputs/Product_categoryWhereInput";
import { Product_categoryWhereUniqueInput } from "../../../inputs/Product_categoryWhereUniqueInput";
import { Product_categoryScalarFieldEnum } from "../../../../enums/Product_categoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProduct_categoryOrThrowArgs {
  @TypeGraphQL.Field(_type => Product_categoryWhereInput, {
    nullable: true
  })
  where?: Product_categoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_categoryOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_categoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_categoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"product_id" | "product_version_id" | "category_id" | "category_version_id"> | undefined;
}

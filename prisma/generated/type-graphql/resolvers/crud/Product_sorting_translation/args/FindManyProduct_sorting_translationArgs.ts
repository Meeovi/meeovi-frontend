import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_sorting_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_sorting_translationOrderByWithRelationAndSearchRelevanceInput";
import { Product_sorting_translationWhereInput } from "../../../inputs/Product_sorting_translationWhereInput";
import { Product_sorting_translationWhereUniqueInput } from "../../../inputs/Product_sorting_translationWhereUniqueInput";
import { Product_sorting_translationScalarFieldEnum } from "../../../../enums/Product_sorting_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyProduct_sorting_translationArgs {
  @TypeGraphQL.Field(_type => Product_sorting_translationWhereInput, {
    nullable: true
  })
  where?: Product_sorting_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_sorting_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_sorting_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_sorting_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"product_sorting_id" | "language_id" | "label" | "created_at" | "updated_at"> | undefined;
}

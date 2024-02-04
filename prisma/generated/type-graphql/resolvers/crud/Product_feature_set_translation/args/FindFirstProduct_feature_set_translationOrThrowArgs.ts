import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_feature_set_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_feature_set_translationOrderByWithRelationAndSearchRelevanceInput";
import { Product_feature_set_translationWhereInput } from "../../../inputs/Product_feature_set_translationWhereInput";
import { Product_feature_set_translationWhereUniqueInput } from "../../../inputs/Product_feature_set_translationWhereUniqueInput";
import { Product_feature_set_translationScalarFieldEnum } from "../../../../enums/Product_feature_set_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProduct_feature_set_translationOrThrowArgs {
  @TypeGraphQL.Field(_type => Product_feature_set_translationWhereInput, {
    nullable: true
  })
  where?: Product_feature_set_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_set_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_feature_set_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_feature_set_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_feature_set_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_set_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"product_feature_set_id" | "language_id" | "name" | "description" | "created_at" | "updated_at"> | undefined;
}

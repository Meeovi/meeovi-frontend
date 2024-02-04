import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_feature_setOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_feature_setOrderByWithRelationAndSearchRelevanceInput";
import { Product_feature_setWhereInput } from "../../../inputs/Product_feature_setWhereInput";
import { Product_feature_setWhereUniqueInput } from "../../../inputs/Product_feature_setWhereUniqueInput";
import { Product_feature_setScalarFieldEnum } from "../../../../enums/Product_feature_setScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProduct_feature_setOrThrowArgs {
  @TypeGraphQL.Field(_type => Product_feature_setWhereInput, {
    nullable: true
  })
  where?: Product_feature_setWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_setOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_feature_setOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_feature_setWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_feature_setWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_setScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "features" | "created_at" | "updated_at"> | undefined;
}

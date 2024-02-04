import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_feature_setUpdateInput } from "../../../inputs/Product_feature_setUpdateInput";
import { Product_feature_setWhereUniqueInput } from "../../../inputs/Product_feature_setWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_feature_setArgs {
  @TypeGraphQL.Field(_type => Product_feature_setUpdateInput, {
    nullable: false
  })
  data!: Product_feature_setUpdateInput;

  @TypeGraphQL.Field(_type => Product_feature_setWhereUniqueInput, {
    nullable: false
  })
  where!: Product_feature_setWhereUniqueInput;
}

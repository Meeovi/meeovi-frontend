import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_feature_setCreateInput } from "../../../inputs/Product_feature_setCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_feature_setArgs {
  @TypeGraphQL.Field(_type => Product_feature_setCreateInput, {
    nullable: false
  })
  data!: Product_feature_setCreateInput;
}

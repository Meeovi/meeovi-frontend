import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_feature_setWhereUniqueInput } from "../../../inputs/Product_feature_setWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneProduct_feature_setArgs {
  @TypeGraphQL.Field(_type => Product_feature_setWhereUniqueInput, {
    nullable: false
  })
  where!: Product_feature_setWhereUniqueInput;
}

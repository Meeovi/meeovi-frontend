import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_cross_selling_translationWhereUniqueInput } from "../../../inputs/Product_cross_selling_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneProduct_cross_selling_translationArgs {
  @TypeGraphQL.Field(_type => Product_cross_selling_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_cross_selling_translationWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_priceWhereUniqueInput } from "../../../inputs/Product_priceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProduct_priceOrThrowArgs {
  @TypeGraphQL.Field(_type => Product_priceWhereUniqueInput, {
    nullable: false
  })
  where!: Product_priceWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_cross_sellingWhereUniqueInput } from "../../../inputs/Product_cross_sellingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProduct_cross_sellingOrThrowArgs {
  @TypeGraphQL.Field(_type => Product_cross_sellingWhereUniqueInput, {
    nullable: false
  })
  where!: Product_cross_sellingWhereUniqueInput;
}

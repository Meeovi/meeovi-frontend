import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_sortingWhereUniqueInput } from "../../../inputs/Product_sortingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProduct_sortingOrThrowArgs {
  @TypeGraphQL.Field(_type => Product_sortingWhereUniqueInput, {
    nullable: false
  })
  where!: Product_sortingWhereUniqueInput;
}

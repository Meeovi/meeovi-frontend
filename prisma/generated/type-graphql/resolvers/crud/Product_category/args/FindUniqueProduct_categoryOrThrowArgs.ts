import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_categoryWhereUniqueInput } from "../../../inputs/Product_categoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProduct_categoryOrThrowArgs {
  @TypeGraphQL.Field(_type => Product_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Product_categoryWhereUniqueInput;
}

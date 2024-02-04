import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_optionWhereUniqueInput } from "../../../inputs/Product_optionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProduct_optionOrThrowArgs {
  @TypeGraphQL.Field(_type => Product_optionWhereUniqueInput, {
    nullable: false
  })
  where!: Product_optionWhereUniqueInput;
}

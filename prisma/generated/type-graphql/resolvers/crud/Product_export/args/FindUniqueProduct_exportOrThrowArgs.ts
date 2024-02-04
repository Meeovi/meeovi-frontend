import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_exportWhereUniqueInput } from "../../../inputs/Product_exportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProduct_exportOrThrowArgs {
  @TypeGraphQL.Field(_type => Product_exportWhereUniqueInput, {
    nullable: false
  })
  where!: Product_exportWhereUniqueInput;
}

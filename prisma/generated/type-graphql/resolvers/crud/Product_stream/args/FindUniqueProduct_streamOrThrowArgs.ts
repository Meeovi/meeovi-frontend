import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_streamWhereUniqueInput } from "../../../inputs/Product_streamWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProduct_streamOrThrowArgs {
  @TypeGraphQL.Field(_type => Product_streamWhereUniqueInput, {
    nullable: false
  })
  where!: Product_streamWhereUniqueInput;
}

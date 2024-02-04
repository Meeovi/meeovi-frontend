import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_mediaWhereUniqueInput } from "../../../inputs/Product_mediaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProduct_mediaOrThrowArgs {
  @TypeGraphQL.Field(_type => Product_mediaWhereUniqueInput, {
    nullable: false
  })
  where!: Product_mediaWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_manufacturer_translationWhereUniqueInput } from "../../../inputs/Product_manufacturer_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProduct_manufacturer_translationOrThrowArgs {
  @TypeGraphQL.Field(_type => Product_manufacturer_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_manufacturer_translationWhereUniqueInput;
}

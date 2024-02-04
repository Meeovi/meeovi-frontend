import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaxWhereUniqueInput } from "../../../inputs/TaxWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTaxArgs {
  @TypeGraphQL.Field(_type => TaxWhereUniqueInput, {
    nullable: false
  })
  where!: TaxWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_providerWhereUniqueInput } from "../../../inputs/Tax_providerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTax_providerOrThrowArgs {
  @TypeGraphQL.Field(_type => Tax_providerWhereUniqueInput, {
    nullable: false
  })
  where!: Tax_providerWhereUniqueInput;
}

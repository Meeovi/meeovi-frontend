import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_providerCreateInput } from "../../../inputs/Tax_providerCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTax_providerArgs {
  @TypeGraphQL.Field(_type => Tax_providerCreateInput, {
    nullable: false
  })
  data!: Tax_providerCreateInput;
}

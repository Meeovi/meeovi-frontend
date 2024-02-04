import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaxCreateInput } from "../../../inputs/TaxCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTaxArgs {
  @TypeGraphQL.Field(_type => TaxCreateInput, {
    nullable: false
  })
  data!: TaxCreateInput;
}

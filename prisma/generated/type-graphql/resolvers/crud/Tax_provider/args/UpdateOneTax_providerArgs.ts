import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_providerUpdateInput } from "../../../inputs/Tax_providerUpdateInput";
import { Tax_providerWhereUniqueInput } from "../../../inputs/Tax_providerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTax_providerArgs {
  @TypeGraphQL.Field(_type => Tax_providerUpdateInput, {
    nullable: false
  })
  data!: Tax_providerUpdateInput;

  @TypeGraphQL.Field(_type => Tax_providerWhereUniqueInput, {
    nullable: false
  })
  where!: Tax_providerWhereUniqueInput;
}

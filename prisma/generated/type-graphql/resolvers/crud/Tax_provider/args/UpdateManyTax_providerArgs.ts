import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_providerUpdateManyMutationInput } from "../../../inputs/Tax_providerUpdateManyMutationInput";
import { Tax_providerWhereInput } from "../../../inputs/Tax_providerWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTax_providerArgs {
  @TypeGraphQL.Field(_type => Tax_providerUpdateManyMutationInput, {
    nullable: false
  })
  data!: Tax_providerUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Tax_providerWhereInput, {
    nullable: true
  })
  where?: Tax_providerWhereInput | undefined;
}

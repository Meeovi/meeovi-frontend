import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaxUpdateManyMutationInput } from "../../../inputs/TaxUpdateManyMutationInput";
import { TaxWhereInput } from "../../../inputs/TaxWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTaxArgs {
  @TypeGraphQL.Field(_type => TaxUpdateManyMutationInput, {
    nullable: false
  })
  data!: TaxUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TaxWhereInput, {
    nullable: true
  })
  where?: TaxWhereInput | undefined;
}

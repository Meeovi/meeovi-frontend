import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaxUpdateInput } from "../../../inputs/TaxUpdateInput";
import { TaxWhereUniqueInput } from "../../../inputs/TaxWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTaxArgs {
  @TypeGraphQL.Field(_type => TaxUpdateInput, {
    nullable: false
  })
  data!: TaxUpdateInput;

  @TypeGraphQL.Field(_type => TaxWhereUniqueInput, {
    nullable: false
  })
  where!: TaxWhereUniqueInput;
}

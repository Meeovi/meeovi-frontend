import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaxCreateInput } from "../../../inputs/TaxCreateInput";
import { TaxUpdateInput } from "../../../inputs/TaxUpdateInput";
import { TaxWhereUniqueInput } from "../../../inputs/TaxWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTaxArgs {
  @TypeGraphQL.Field(_type => TaxWhereUniqueInput, {
    nullable: false
  })
  where!: TaxWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaxCreateInput, {
    nullable: false
  })
  create!: TaxCreateInput;

  @TypeGraphQL.Field(_type => TaxUpdateInput, {
    nullable: false
  })
  update!: TaxUpdateInput;
}

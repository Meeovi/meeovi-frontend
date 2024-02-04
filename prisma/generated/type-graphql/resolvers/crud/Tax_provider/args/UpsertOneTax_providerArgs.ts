import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_providerCreateInput } from "../../../inputs/Tax_providerCreateInput";
import { Tax_providerUpdateInput } from "../../../inputs/Tax_providerUpdateInput";
import { Tax_providerWhereUniqueInput } from "../../../inputs/Tax_providerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTax_providerArgs {
  @TypeGraphQL.Field(_type => Tax_providerWhereUniqueInput, {
    nullable: false
  })
  where!: Tax_providerWhereUniqueInput;

  @TypeGraphQL.Field(_type => Tax_providerCreateInput, {
    nullable: false
  })
  create!: Tax_providerCreateInput;

  @TypeGraphQL.Field(_type => Tax_providerUpdateInput, {
    nullable: false
  })
  update!: Tax_providerUpdateInput;
}

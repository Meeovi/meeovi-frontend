import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaxCreateManyInput } from "../../../inputs/TaxCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTaxArgs {
  @TypeGraphQL.Field(_type => [TaxCreateManyInput], {
    nullable: false
  })
  data!: TaxCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

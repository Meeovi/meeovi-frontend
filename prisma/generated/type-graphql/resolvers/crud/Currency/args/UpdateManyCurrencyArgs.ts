import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrencyUpdateManyMutationInput } from "../../../inputs/CurrencyUpdateManyMutationInput";
import { CurrencyWhereInput } from "../../../inputs/CurrencyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCurrencyArgs {
  @TypeGraphQL.Field(_type => CurrencyUpdateManyMutationInput, {
    nullable: false
  })
  data!: CurrencyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CurrencyWhereInput, {
    nullable: true
  })
  where?: CurrencyWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_country_roundingUpdateManyMutationInput } from "../../../inputs/Currency_country_roundingUpdateManyMutationInput";
import { Currency_country_roundingWhereInput } from "../../../inputs/Currency_country_roundingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCurrency_country_roundingArgs {
  @TypeGraphQL.Field(_type => Currency_country_roundingUpdateManyMutationInput, {
    nullable: false
  })
  data!: Currency_country_roundingUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Currency_country_roundingWhereInput, {
    nullable: true
  })
  where?: Currency_country_roundingWhereInput | undefined;
}

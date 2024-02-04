import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_translationUpdateManyMutationInput } from "../../../inputs/Currency_translationUpdateManyMutationInput";
import { Currency_translationWhereInput } from "../../../inputs/Currency_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCurrency_translationArgs {
  @TypeGraphQL.Field(_type => Currency_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Currency_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Currency_translationWhereInput, {
    nullable: true
  })
  where?: Currency_translationWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Salutation_translationUpdateManyMutationInput } from "../../../inputs/Salutation_translationUpdateManyMutationInput";
import { Salutation_translationWhereInput } from "../../../inputs/Salutation_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySalutation_translationArgs {
  @TypeGraphQL.Field(_type => Salutation_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Salutation_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Salutation_translationWhereInput, {
    nullable: true
  })
  where?: Salutation_translationWhereInput | undefined;
}

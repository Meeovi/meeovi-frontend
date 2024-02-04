import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Unit_translationUpdateManyMutationInput } from "../../../inputs/Unit_translationUpdateManyMutationInput";
import { Unit_translationWhereInput } from "../../../inputs/Unit_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUnit_translationArgs {
  @TypeGraphQL.Field(_type => Unit_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Unit_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Unit_translationWhereInput, {
    nullable: true
  })
  where?: Unit_translationWhereInput | undefined;
}

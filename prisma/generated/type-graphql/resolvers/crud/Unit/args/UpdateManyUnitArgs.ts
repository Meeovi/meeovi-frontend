import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UnitUpdateManyMutationInput } from "../../../inputs/UnitUpdateManyMutationInput";
import { UnitWhereInput } from "../../../inputs/UnitWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUnitArgs {
  @TypeGraphQL.Field(_type => UnitUpdateManyMutationInput, {
    nullable: false
  })
  data!: UnitUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UnitWhereInput, {
    nullable: true
  })
  where?: UnitWhereInput | undefined;
}

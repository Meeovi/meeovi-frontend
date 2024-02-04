import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Flow_templateUpdateManyMutationInput } from "../../../inputs/Flow_templateUpdateManyMutationInput";
import { Flow_templateWhereInput } from "../../../inputs/Flow_templateWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFlow_templateArgs {
  @TypeGraphQL.Field(_type => Flow_templateUpdateManyMutationInput, {
    nullable: false
  })
  data!: Flow_templateUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Flow_templateWhereInput, {
    nullable: true
  })
  where?: Flow_templateWhereInput | undefined;
}

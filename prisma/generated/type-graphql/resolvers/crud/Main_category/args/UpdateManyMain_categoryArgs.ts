import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Main_categoryUpdateManyMutationInput } from "../../../inputs/Main_categoryUpdateManyMutationInput";
import { Main_categoryWhereInput } from "../../../inputs/Main_categoryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMain_categoryArgs {
  @TypeGraphQL.Field(_type => Main_categoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: Main_categoryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Main_categoryWhereInput, {
    nullable: true
  })
  where?: Main_categoryWhereInput | undefined;
}

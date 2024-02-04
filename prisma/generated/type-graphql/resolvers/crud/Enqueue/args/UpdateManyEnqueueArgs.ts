import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnqueueUpdateManyMutationInput } from "../../../inputs/EnqueueUpdateManyMutationInput";
import { EnqueueWhereInput } from "../../../inputs/EnqueueWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEnqueueArgs {
  @TypeGraphQL.Field(_type => EnqueueUpdateManyMutationInput, {
    nullable: false
  })
  data!: EnqueueUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EnqueueWhereInput, {
    nullable: true
  })
  where?: EnqueueWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalutationUpdateManyMutationInput } from "../../../inputs/SalutationUpdateManyMutationInput";
import { SalutationWhereInput } from "../../../inputs/SalutationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySalutationArgs {
  @TypeGraphQL.Field(_type => SalutationUpdateManyMutationInput, {
    nullable: false
  })
  data!: SalutationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SalutationWhereInput, {
    nullable: true
  })
  where?: SalutationWhereInput | undefined;
}

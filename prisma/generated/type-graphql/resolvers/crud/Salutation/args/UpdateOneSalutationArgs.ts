import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalutationUpdateInput } from "../../../inputs/SalutationUpdateInput";
import { SalutationWhereUniqueInput } from "../../../inputs/SalutationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSalutationArgs {
  @TypeGraphQL.Field(_type => SalutationUpdateInput, {
    nullable: false
  })
  data!: SalutationUpdateInput;

  @TypeGraphQL.Field(_type => SalutationWhereUniqueInput, {
    nullable: false
  })
  where!: SalutationWhereUniqueInput;
}

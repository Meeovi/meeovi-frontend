import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalutationCreateInput } from "../../../inputs/SalutationCreateInput";
import { SalutationUpdateInput } from "../../../inputs/SalutationUpdateInput";
import { SalutationWhereUniqueInput } from "../../../inputs/SalutationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSalutationArgs {
  @TypeGraphQL.Field(_type => SalutationWhereUniqueInput, {
    nullable: false
  })
  where!: SalutationWhereUniqueInput;

  @TypeGraphQL.Field(_type => SalutationCreateInput, {
    nullable: false
  })
  create!: SalutationCreateInput;

  @TypeGraphQL.Field(_type => SalutationUpdateInput, {
    nullable: false
  })
  update!: SalutationUpdateInput;
}

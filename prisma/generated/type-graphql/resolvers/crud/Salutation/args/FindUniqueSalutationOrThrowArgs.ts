import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalutationWhereUniqueInput } from "../../../inputs/SalutationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSalutationOrThrowArgs {
  @TypeGraphQL.Field(_type => SalutationWhereUniqueInput, {
    nullable: false
  })
  where!: SalutationWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Main_categoryScalarWhereInput } from "../inputs/Main_categoryScalarWhereInput";
import { Main_categoryUpdateManyMutationInput } from "../inputs/Main_categoryUpdateManyMutationInput";

@TypeGraphQL.InputType("Main_categoryUpdateManyWithWhereWithoutSales_channelInput", {})
export class Main_categoryUpdateManyWithWhereWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Main_categoryScalarWhereInput, {
    nullable: false
  })
  where!: Main_categoryScalarWhereInput;

  @TypeGraphQL.Field(_type => Main_categoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: Main_categoryUpdateManyMutationInput;
}

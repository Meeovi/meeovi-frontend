import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_pageScalarWhereInput } from "../inputs/Landing_pageScalarWhereInput";
import { Landing_pageUpdateManyMutationInput } from "../inputs/Landing_pageUpdateManyMutationInput";

@TypeGraphQL.InputType("Landing_pageUpdateManyWithWhereWithoutCms_pageInput", {})
export class Landing_pageUpdateManyWithWhereWithoutCms_pageInput {
  @TypeGraphQL.Field(_type => Landing_pageScalarWhereInput, {
    nullable: false
  })
  where!: Landing_pageScalarWhereInput;

  @TypeGraphQL.Field(_type => Landing_pageUpdateManyMutationInput, {
    nullable: false
  })
  data!: Landing_pageUpdateManyMutationInput;
}

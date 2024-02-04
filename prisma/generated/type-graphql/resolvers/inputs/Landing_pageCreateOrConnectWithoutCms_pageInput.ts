import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_pageCreateWithoutCms_pageInput } from "../inputs/Landing_pageCreateWithoutCms_pageInput";
import { Landing_pageWhereUniqueInput } from "../inputs/Landing_pageWhereUniqueInput";

@TypeGraphQL.InputType("Landing_pageCreateOrConnectWithoutCms_pageInput", {})
export class Landing_pageCreateOrConnectWithoutCms_pageInput {
  @TypeGraphQL.Field(_type => Landing_pageWhereUniqueInput, {
    nullable: false
  })
  where!: Landing_pageWhereUniqueInput;

  @TypeGraphQL.Field(_type => Landing_pageCreateWithoutCms_pageInput, {
    nullable: false
  })
  create!: Landing_pageCreateWithoutCms_pageInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_pageUpdateWithoutCms_pageInput } from "../inputs/Landing_pageUpdateWithoutCms_pageInput";
import { Landing_pageWhereUniqueInput } from "../inputs/Landing_pageWhereUniqueInput";

@TypeGraphQL.InputType("Landing_pageUpdateWithWhereUniqueWithoutCms_pageInput", {})
export class Landing_pageUpdateWithWhereUniqueWithoutCms_pageInput {
  @TypeGraphQL.Field(_type => Landing_pageWhereUniqueInput, {
    nullable: false
  })
  where!: Landing_pageWhereUniqueInput;

  @TypeGraphQL.Field(_type => Landing_pageUpdateWithoutCms_pageInput, {
    nullable: false
  })
  data!: Landing_pageUpdateWithoutCms_pageInput;
}

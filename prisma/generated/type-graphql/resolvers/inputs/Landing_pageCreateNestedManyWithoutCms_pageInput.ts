import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_pageCreateManyCms_pageInputEnvelope } from "../inputs/Landing_pageCreateManyCms_pageInputEnvelope";
import { Landing_pageCreateOrConnectWithoutCms_pageInput } from "../inputs/Landing_pageCreateOrConnectWithoutCms_pageInput";
import { Landing_pageCreateWithoutCms_pageInput } from "../inputs/Landing_pageCreateWithoutCms_pageInput";
import { Landing_pageWhereUniqueInput } from "../inputs/Landing_pageWhereUniqueInput";

@TypeGraphQL.InputType("Landing_pageCreateNestedManyWithoutCms_pageInput", {})
export class Landing_pageCreateNestedManyWithoutCms_pageInput {
  @TypeGraphQL.Field(_type => [Landing_pageCreateWithoutCms_pageInput], {
    nullable: true
  })
  create?: Landing_pageCreateWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_pageCreateOrConnectWithoutCms_pageInput], {
    nullable: true
  })
  connectOrCreate?: Landing_pageCreateOrConnectWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => Landing_pageCreateManyCms_pageInputEnvelope, {
    nullable: true
  })
  createMany?: Landing_pageCreateManyCms_pageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Landing_pageWhereUniqueInput], {
    nullable: true
  })
  connect?: Landing_pageWhereUniqueInput[] | undefined;
}

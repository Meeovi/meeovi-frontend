import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Acl_role } from "../../../models/Acl_role";
import { Acl_user_role } from "../../../models/Acl_user_role";
import { App } from "../../../models/App";
import { Integration_role } from "../../../models/Integration_role";
import { Acl_roleAcl_user_roleArgs } from "./args/Acl_roleAcl_user_roleArgs";
import { Acl_roleAppArgs } from "./args/Acl_roleAppArgs";
import { Acl_roleIntegration_roleArgs } from "./args/Acl_roleIntegration_roleArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Acl_role)
export class Acl_roleRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Acl_user_role], {
    nullable: false
  })
  async acl_user_role(@TypeGraphQL.Root() acl_role: Acl_role, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: Acl_roleAcl_user_roleArgs): Promise<Acl_user_role[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).acl_role.findUniqueOrThrow({
      where: {
        id: acl_role.id,
      },
    }).acl_user_role({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [App], {
    nullable: false
  })
  async app(@TypeGraphQL.Root() acl_role: Acl_role, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: Acl_roleAppArgs): Promise<App[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).acl_role.findUniqueOrThrow({
      where: {
        id: acl_role.id,
      },
    }).app({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Integration_role], {
    nullable: false
  })
  async integration_role(@TypeGraphQL.Root() acl_role: Acl_role, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: Acl_roleIntegration_roleArgs): Promise<Integration_role[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).acl_role.findUniqueOrThrow({
      where: {
        id: acl_role.id,
      },
    }).integration_role({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
